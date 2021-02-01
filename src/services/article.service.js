import { api } from '../actions/api'
import authHeader from './auth-header';

class ArticleService {
    getall() {
        return api().get('/article/getall', { headers: authHeader() })
 }

    getbyid(id) {
        return api().get('/article/getarticlebyid/' + id, { headers: authHeader() })
    }

    add(article) {
        article.categoryId=parseInt(article.categoryId);
        return api().post('/article/add', article, { headers: authHeader() });
    }

    update(article) {
        return api().put('/article/update', article, { headers: authHeader() });
    }

    delete(id) {
        return api()
            .delete('/article/delete/' + id, { headers: authHeader() });
    }

}

export default new ArticleService();