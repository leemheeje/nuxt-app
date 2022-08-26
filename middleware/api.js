export default ({store})=>{
	const base = process.env.API_URL
	console.log(store.state.user);
	console.log(`baseurl-----------------------------${store.state.isAuth} /middleware/api.js`);
}