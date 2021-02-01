import { api } from '../actions/api';
import authHeader from "./auth-header";


class UserService {
  getPublicContent() {
    return api().get('/auth' + "all");
  }

  getUser() {
    //debugger
    return api().get('/auth/' + "getUser", { headers: authHeader() }).then((response) => {
      if (response.data) {
        debugger
          localStorage.setItem("userDetail", JSON.stringify(response.data.data));
      }
      return Promise.resolve();
    });
  }

  getModeratorBoard() {
    return api().get('/auth' + "mod", { headers: authHeader() })
  }

  getAdminBoard() {
    return api().get('/auth' + "admin", { headers: authHeader() });
  }
}

export default new UserService();