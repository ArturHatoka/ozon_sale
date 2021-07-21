import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';

// const socketConnection = VueSocketIO('http://localhost:3000');

export default () =>
{
    Vue.use(new VueSocketIO({
        debug: true,
        connection: 'http://127.0.0.1:5000'
    }));
}
