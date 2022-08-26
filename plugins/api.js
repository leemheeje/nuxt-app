export default ({ app: { $axios } }, inject) => {
	// $axios.defaults.baseURL = process.env.API_URL
	const staticApi = 'static_api'
	const _baseURL = process.env.API_URL
	inject('staticApi', {
		jc() {
			return $axios.get(`${_baseURL}/${staticApi}/jc.json`);
		},
		jg() {
			return $axios.get(`${_baseURL}/${staticApi}/jg.json`);
		},
		woodae() {
			return $axios.get(`${_baseURL}/${staticApi}/woodae.json`);
		},
		langage() {
			return $axios.get(`${_baseURL}/${staticApi}/langage.json`);
		},
		license() {
			return $axios.get(`${_baseURL}/${staticApi}/license.json`);
		},
		woodaeUnivers() {
			return $axios.get(`${_baseURL}/${staticApi}/woodae_univers.json`);
		},
	})
}