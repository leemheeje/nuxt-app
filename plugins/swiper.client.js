import Vue from 'vue'
import { Swiper, Navigation, Pagination, Autoplay,Keyboard,Scrollbar } from "swiper";




// Virtual
// Keyboard
// Mousewheel
// Navigation
// Pagination
// Scrollbar
// Parallax
// Zoom
// Lazy
// Controller
// A11y
// History
// HashNavigation
// Autoplay
// EffectFade
// EffectCube
// EffectFlip
// EffectCoverflow
// Thumbs



const swiper = {
    install(Vue, options) {
		console.log(Autoplay);
		Autoplay.params.autoplay.enabled = true;
		Swiper.use([Navigation,
            Pagination,
            Autoplay,
            Keyboard,
            Scrollbar,])
        Vue.prototype.$swiper = Swiper;
        // Vue.prototype.$swiperModules = {
        //     Navigation,
        //     Pagination,
        //     Autoplay,
        //     Keyboard,
        //     Scrollbar,
        // };
    }
};

Vue.use(swiper);