<template>
    <div>
        <form @submit.prevent="userLogin">
            <div>
                <label>Username</label>
                <input type="text" v-model="login.emailAddress" />
            </div>
            <div>
                <label>Password</label>
                <input type="text" v-model="login.password" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                emailAddress: "test@example.com",
                password: "test1234",
            },
        };
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith("local", { data: this.login });
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>


<!-- <template>
  <div>
	<button @click="loginClicked()">Login with Google</button>
  <button @click="loginClicked2()">auth</button>
  </div>
</template>

<script>
  export default {
    //   middleware: ['auth'],
      methods: {
        async loginClicked2() {
			console.log(this.$auth.$state.user);
        },
        async loginClicked() {
			console.log(this.$auth);
            try {
                let res = await this.$auth.loginWith('google');
                console.log("login result: " + res);
            } catch (err) {
            }
        }
    }
  }
</script> -->