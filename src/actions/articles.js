import ArticleService from '../services/article.service';
import {
    GET_ARTICLES_START,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_ERROR,
    GET_ARTICLE_START,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_ERROR,
    ADD_ARTICLE,
    ADD_ARTICLE_ERROR,
    REMOVE_ARTICLE,
    REMOVE_ARTICLE_ERROR,
    EDIT_ARTICLE,
    EDIT_ARTICLE_ERROR

  } from "./types";

// export const getArticles = () => dispatch => {
//     dispatch({type: GET_ARTICLES_START  });
//     api()
//     .get('/article/getall')
//     .then(response => dispatch({type: GET_ARTICLES_SUCCESS, payload:response.data}))
//     .catch(error=> dispatch({type: GET_ARTICLES_ERROR, payload: error}));
    
// }

export const getArticles = () => (dispatch) => {
    dispatch({type: GET_ARTICLES_START  });
    return ArticleService.getall()
    .then(
      (response) => {
        dispatch({
          type: GET_ARTICLES_SUCCESS,
          payload: response.data,
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: GET_ARTICLES_ERROR, payload: error}));
  };

export const getArticle = (id) => dispatch => {
    dispatch({type: GET_ARTICLE_START  });
    return ArticleService.getbyid(id)
    .then(
      (response) => {
        dispatch({
          type: GET_ARTICLE_SUCCESS,
          payload: response.data,
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: GET_ARTICLE_ERROR, payload: error}));
    // dispatch({type:'GET_ARTICLE_START'});
    // api()
    // .get(`/article/getarticlebyid/${id}`)
    // .then(response => dispatch({type:'GET_ARTICLE_SUCCESS', payload:response.data}))
    // .catch(error=> dispatch({type:'GET_ARTICLE_ERROR', payload: error}));
    
}

export const addArticle = ( article ) => dispatch => {
    return ArticleService.add(article)
    .then(
      (response) => {
        dispatch({
          type: ADD_ARTICLE,
          payload: response.data,
          article
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: ADD_ARTICLE_ERROR, payload: error}));
    // api()
    // .post('/article/add', article)
    // .then((response) => {
    //     dispatch({type:"ADD_ARTICLE", payload:response.data, article});
    // })
    // .catch((error) => {
    //     dispatch({
    //         type:"ADD_ARTICLE_ERROR",
    //         payload:error
    //     });
    // });
}

export const editArticle = (id, article) => dispatch => {
  console.log(article)
    return ArticleService.update(article)
    .then(
      (response) => {
        console.log("edit action")
        dispatch({
          type: EDIT_ARTICLE,
          payload: response.data,
          id,
          article
        });

        return response.data;
      })
      .catch(error=> dispatch({type: EDIT_ARTICLE_ERROR, payload: error}));

    // console.log(article)
    // api()
    // .put(`/article/update/${id}`, article)
    // .then((response) => { console.log(response.data)
    //     dispatch({ type:"EDIT_ARTICLE", payload:response.data, article, id })
    // })
    // .catch((error)=>{
    //     dispatch({ type:"EDIT_ARTICLE_ERROR", payload:error})
    // })
}

export const removeArticle = (id) => dispatch => {
    return ArticleService.delete(id)
    .then(
      (response) => {
        dispatch({
          type: REMOVE_ARTICLE,
          payload: response.data
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: REMOVE_ARTICLE_ERROR, payload: error}));

    // console.log(id)
    // api()
    // .delete(`/article/delete/${id}`)
    // .then((response) => {
    //     dispatch({ type: "REMOVE_ARTICLE", payload:response.data, id})
    // })
    // .catch((error) =>{
    //     dispatch({ type:"REMOVE_ARTICLE_ERROR", payload:error})
    // })
}

