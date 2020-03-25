
import Vue from 'vue'

import IotaPayment from 'vue-iota-payment';

export default ({ store }) => {
    Vue.use(IotaPayment, { store, url: process.env.PROJECTS_URL, path: '/iotapay' });
}