/*
 * This file is part of the O2System PHP Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 *  @copyright      Copyright (c) Steeve Andrian Salim
 */
import "./theme.scss";
import Vue from 'vue';
import Vuetify from 'vuetify';
import Theme from './theme.vue';
import Router from "../../config/router";

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
    el: "#app",
    router: Router,
    vuetify: new Vuetify({}),
    components: {
          Theme
    },
    template: "<Theme/>"
});