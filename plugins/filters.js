import Vue from 'vue'

Vue.filter('testfilter', (value)=>{
	return '$'+value
})