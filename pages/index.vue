<template>
    <div>
        {{text|testfilter}}

		<button @click="asdfavwxE">{{d}}</button>
		<nuxt-link :to="{ path: '/jobpost/recruitment'}">asdf</nuxt-link>
    </div>
</template>
<script>

export default {
	async asyncData({$axios}){
		let d = (process.server ? '서버' : '클라이언트')+Math.random()
		return {d}
	},
	data : ()=>{
		return {
			text : 1
		}
	},
	methods:{
		async asdfavwxE(){
			// console.log(this.$filters('임희재'))
			// await this.$axios.get('http://localhost:5500/static_api/area.json').then(data=>{
			// 	console.log(data)
			// })
			this.$axios.get('/api').then(data=>{
				// console.log(data)
			})
		}
	}
};
</script>