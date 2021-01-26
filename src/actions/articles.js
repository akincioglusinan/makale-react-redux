import {api} from './api'

export const getArticles = () => dispatch => {
    dispatch({type:'GET_ARTICLES_START'});
    api()
    .get('/article/getall')
    .then(response => dispatch({type:'GET_ARTICLES_SUCCESS', payload:response.data}))
    .catch(error=> dispatch({type:'GET_ARTICLES_ERROR', payload: error}));
    
}

export const getArticle = (id) => dispatch => {
    dispatch({type:'GET_ARTICLE_START'});
    api()
    .get(`/article/getarticlebyid/${id}`)
    .then(response => dispatch({type:'GET_ARTICLE_SUCCESS', payload:response.data}))
    .catch(error=> dispatch({type:'GET_ARTICLE_ERROR', payload: error}));
    
}

export const addArticle = ( article ) => dispatch => {
    api()
    .post('/article/add', article)
    .then((response) => {
        dispatch({type:"ADD_ARTICLE", payload:response.data, article});
    })
    .catch((error) => {
        dispatch({
            type:"ADD_ARTICLE_ERROR",
            payload:error
        });
    });
}

export const removeArticle = (id) => dispatch => {
    console.log(id)
    api()
    .delete(`/article/delete/${id}`)
    .then((response) => {
        dispatch({ type: "REMOVE_ARTICLE", payload:response.data, id})
    })
    .catch((error) =>{
        dispatch({ type:"REMOVE_ARTICLE_ERROR", payload:error})
    })
}

export const editArticle = (id, article) => dispatch => {
    console.log(article)
    api()
    .put(`/article/update/${id}`, article)
    .then((response) => { console.log(response.data)
        dispatch({ type:"EDIT_ARTICLE", payload:response.data, article, id })
    })
    .catch((error)=>{
        dispatch({ type:"EDIT_ARTICLE_ERROR", payload:error})
    })
}