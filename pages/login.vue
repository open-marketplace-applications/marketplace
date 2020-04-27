<template>
  <div>
    <form @submit="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <pre>{{error}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: 'admin',
        password: 'test42'
      },
      error: null
    }
  },
  methods: {
    async userLogin() {
      console.log("login", this.login)
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
        this.error = err.response.data.message
      }
    }
  }
}
</script>