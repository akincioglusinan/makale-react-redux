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
        localStorage.removeItem("userDetail");
    }

    register(firstname, lastname, email, password) {
        return api()
            .post('/auth/register', {
                firstname,
                lastname,
                email,
                password
            });
    }
}

export default new AuthService();