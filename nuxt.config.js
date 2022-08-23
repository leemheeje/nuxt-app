export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
	script:[
		{src: `//localhost:5500/static_api/cat_jm.js`},
		{src: `//localhost:5500/static_api/cat_su.js`},
		{src: `//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`}
	]
  },
  loading:{color: 'red'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'~/assets/css/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	'~/plugins/filters.js',
	'~/plugins/api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
	dirs:[
		'~/components',
		'~/components/UiComponents',
	]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // Can be also an object with default options
	//baseURL: '/',
	baseURL: process.env.API_URL,

  },
//   proxy: {
//     '/loc/': { target: 'http://localhost:5500/static_api', pathRewrite: {'^/loc/': ''} }
//   },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
//   serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],
  env:{
	SUBWAY_INFO_KEY: process.env.SUBWAY_INFO_KEY,
	API_URL:process.env.API_URL
  }
}
