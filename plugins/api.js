export default ({ app: { $axios } }, inject) => {
	inject('api', {
		static_api(filename = '') {
			return $axios.get(`/static_api/${filename}.json`);
		}
		//asdf : 1
	})
}