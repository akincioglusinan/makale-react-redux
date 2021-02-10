import { api } from '../actions/api'

class AuthService {
    login(email, password) {
        return api()
            .post('/auth/login', { email, password })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return api()
            .post('/auth/register', user)
            .then((response) => {
                console.log(response, 'service')
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export default new AuthService();