// export default ({store, redirect, route})=>{
// console.log(`임희재${Math.random()}`);
// // if(!store.state.auth.isAuth && route.path !== '/login') return redirect('/login');
// 	//return !store.state.auth.isAuth ? redirect('/auth/login') : ''
// }
export default function ({ store, redirect, route }) {
	// If the user is not authenticated
	if (!store.state.auth) {
	  const path = encodeURIComponent(route.path);
	  return redirect(`/login?r=${path}`);
	}
  }
  