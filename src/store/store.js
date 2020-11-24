import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings';
import auth from './modules/auth';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		settings,
		auth
	}
})