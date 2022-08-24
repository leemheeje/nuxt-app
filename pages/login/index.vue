<template>
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
</script>