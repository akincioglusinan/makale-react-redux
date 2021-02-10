
import { api } from '../actions/api'
import authHeader from './auth-header';

class CartService {
    getByUserId(userid) {
        return api()
            .get(`/cart/getbyuserid/${userid}`, { headers: authHeader() })
    }
    add(cart) {
        return api().post('/cart/add', cart, { headers: authHeader() });
    }
    delete(id) {
        return api()
            .delete(`/cart/delete/${id}`, { headers: authHeader() });
    }
}

export default new CartService();