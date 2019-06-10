import axios from "axios";

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        username: '',
        role: '',
    },
    mutations: {
        REQUEST(state) {
            state.status = 'loading';
        },
        SUCCESS(state, token) {
            state.status = 'success';
            state.token = token;
        },
        ERROR(state) {
            state.status = 'error';
        },
        LOGOUT(state) {
            state.status = '';
            state.token = '';
            state.username = '';
            state.role = '';
        },
        INIT(state, {username, role}) {
            state.status = 'success';
            state.username = username;
            state.role = role;
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        isInit: state => !!state.username && !!state.role,
        // isAdmin: state => state.role === 'ADMIN',
        // isManager: state => state.role === 'MANAGER',
        // isStaff: state => state.role === 'STAFF',
        // isArchivist: state => state.role === 'ARCHIVIST',npm
        username: state => state.username
    },
    actions: {
        LOGIN({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('REQUEST');
                axios({url: 'http://localhost:8080/login', data: user, method: 'POST'})
                    .then(response => {
                        const token = response.data.token;
                        localStorage.setItem('token', token);
                        commit('SUCCESS', token);
                        console.log('login success');
                        resolve(response);
                    })
                    .catch(error => {
                        commit('ERROR');
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
        LOGOUT({commit}) {
            return new Promise((resolve) => {
                var username = this.state.AUTHENTICATION_STORE.username;
                commit('LOGOUT');
                localStorage.removeItem('token');
                resolve()
            })
        },
        INIT({commit}) {
            return new Promise((resolve, reject) => {
                commit('REQUEST');
            })
        }
    }
};
