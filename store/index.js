import { SET_AUTH } from '~/store/mutations-type';
export const state = () => ({
	isAuth: false,
	user: null,
});

export const mutations = {
	[SET_AUTH](state, payload) {
		console.log(`store/SET_AUTH read ------${payload.loggedIn}---------------${Math.random()}`);
		state.isAuth = payload.loggedIn;
		state.user = payload.user;
	}
}