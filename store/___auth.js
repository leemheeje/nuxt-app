import { SET_AUTH } from '~/store/mutations-type';
export const state = () => ({
	isAuth: false,
});

export const mutations = {
	[SET_AUTH](state, payload) {
		state.isAuth = payload;
	}
}