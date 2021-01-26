const articleState = {
  isLoading: false,
  articles: [],
  article: {},
  message: ''
}

const articlesReducer = (state = articleState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_START':
      return {
        ...state,
        isLoading: true,
        message: ''
      }
    case 'GET_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.payload,
        isLoading: false
      }
    case 'GET_ARTICLES_ERROR': return {
      ...state,
      message: action.payload,
      isLoading: false
    }
    case 'GET_ARTICLE_START':
      return {
        ...state,
        isLoading: true,
        message: ''
      }
    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.payload,
        isLoading: false
      }
    case 'GET_ARTICLE_ERROR': return {
      ...state,
      message: action.payload,
      isLoading: false
    }
    case 'ADD_ARTICLE':
      console.log(state)
      return {
        ...state,
        message: action.payload,
        articles: [...state.articles, action.article]
      }

    case 'ADD_ARTICLE_ERROR':
      return {
        ...state,
        message: action.payload
      }

    case 'REMOVE_ARTICLE':
      return {
        ...state,
        message:action.payload,
        articles:state.articles.filter(({ id }) => {
          return id !== action.id
        })
      }
    case 'REMOVE_ARTICLE_ERROR':
      return { ...state, message: action.payload }

    case 'EDIT_ARTICLE':
      state.message=action.payload
      //console.log(action.payload)
      return state.map((article) => {
        if (article.id === action.id) {
          return {
            ...article,
            ...action.article
          }
        }
        else {
          return article;
        }
      })
    default:
      return state;
  }
}

export default articlesReducer