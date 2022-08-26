import { SET_AUTH } from '~/store/mutations-type';

export default async ({ app,store, redirect, route, $cookies }) => {
	const token = $cookies.get('auth._token.local')
	console.log(`middleware/authentication read ------------------------------------------------${Math.random()}--`);
	if (!token && route.path !== '/login') { return redirect('/login') }
	console.log(`store.state.auth : ${JSON.stringify(store.state.auth)}`);
	//await console.log(app);//app.$axios.get('/api/me')//.then(({data})=>)
	store.commit(SET_AUTH, store.state.auth)
	console.log('커밋된거니?');
}