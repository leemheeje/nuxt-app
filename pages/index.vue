<template>
    <div>
        {{text|testfilter}}
		<button @click="asdfavwxE">button</button>
		<nuxt-link :to="{ path: '/jobpost/recruitment'}">asdf</nuxt-link>
    </div>
</template>
<script>

export default {
	// async asyncData({$axios}){
	// 	const aa = await $axios.$get('/api');
	// 	console.dir(aa);
	// },
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
				console.log(data)
			})
		}
	}
};
</script>