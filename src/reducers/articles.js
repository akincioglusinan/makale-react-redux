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

} from "../actions/types";

const articleState = {
  isLoading: false,
  articles: [],
  article: {},
  message: ''
}

const articlesReducer = (state = articleState, action) => {
  switch (action.type) {
    case GET_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
        message: ''
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isLoading: false
      }
    case GET_ARTICLES_ERROR: return {
      ...state,
      message: action.payload,
      isLoading: false
    }
    case GET_ARTICLE_START:
      return {
        ...state,
        isLoading: true,
        message: ''
      }
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isLoading: false
      }
    case GET_ARTICLE_ERROR: return {
      ...state,
      message: action.payload,
      isLoading: false
    }
    case ADD_ARTICLE:
      console.log(state)
      return {
        ...state,
        message: action.payload,
        articles: [...state.articles, action.article]
      }

    case ADD_ARTICLE_ERROR:
      return {
        ...state,
        message: action.payload
      }

    case REMOVE_ARTICLE:
      return {
        ...state,
        message: action.payload,
        articles: state.articles.filter(({ id }) => {
          return id !== action.id
        })
      }
    case REMOVE_ARTICLE_ERROR:
      return { ...state, message: action.payload }

    case EDIT_ARTICLE:
      return {
        ...state,
        message: action.payload,
        articles: state.articles.map((index) => {
          if (index.id == action.id) {
            return {
              ...action.article
            }
          } else {
            return index
          }
        }
        )
      }

    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state;
  }
}

export default articlesReducer