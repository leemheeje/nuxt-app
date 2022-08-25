export default ({ app: { $axios } }, inject) => {
	$axios.defaults.baseURL = process.env.API_URL
	const staticApi = 'static_api'
	inject('staticApi', {
		jc() {
			return $axios.get(`/${staticApi}/jc.json`);
		},
		jg() {
			return $axios.get(`/${staticApi}/jg.json`);
		},
		woodae() {
			return $axios.get(`/${staticApi}/woodae.json`);
		},
		langage() {
			return $axios.get(`/${staticApi}/langage.json`);
		},
		license() {
			return $axios.get(`/${staticApi}/license.json`);
		},
		woodaeUnivers() {
			return $axios.get(`/${staticApi}/woodae_univers.json`);
		},
	})
}