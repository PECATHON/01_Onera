import {
  BOOKMARKS_PAGE_LOADED,
  BOOKMARKS_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BOOKMARKS_PAGE_LOADED:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount
      };
    case BOOKMARKS_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};