import Vue from 'vue'

import Gun from 'gun/gun'
import VueGun from 'vue-gun';

Vue.use(VueGun, {
    gun: Gun() // your gun instance
});