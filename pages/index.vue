<template>
    <div class="asdfasdfasdfasdf">
        {{ text | testfilter }}

        <button @click="asdfavwxE">{{ d }}</button>
        <nuxt-link :to="{ path: '/jobpost/recruitment' }">asdf</nuxt-link>
        <button @click="logout">logout</button>
        <form-checkbox2 value="신입" v-model="testsetsetset">신입</form-checkbox2>
        <form-checkbox2 value="경력" v-model="testsetsetset">경력</form-checkbox2>
		{{testsetsetset}}
		<li v-for="(option, index) of testsetsetset" :key="index">
			{{ option }}
		</li>
		<asdf-tnc/>
    </div>
</template>
<script>
	import FormCheckbox2 from '@/components/Form/Checkbox2.vue'
	import asdfTnc from '@/components/asdf-tnc.vue'
export default {
	components:{
		FormCheckbox2,
		asdfTnc,
	},
    async asyncData({ $axios }) {
        let d = (process.server ? "서버" : "클라이언트") + Math.random();
        return { d };
    },
    data(){
        return {
            text: 1,
			testsetsetset:false
        };
    },
    methods: {
        async asdfavwxE() {
            // console.log(this.$filters('임희재'))
            // await this.$axios.get('http://localhost:5500/static_api/area.json').then(data=>{
            // 	console.log(data)
            // })
            this.$axios.get("/api").then((data) => {
                // console.log(data)
            });
        },
        logout() {
            this.$auth.logout().then(() => {
                this.$router.push("/login");
            });
        },
    },
};
</script>


<style scoped>
@import '~/assets/css/scope_test.css';
</style>