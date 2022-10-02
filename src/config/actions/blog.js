import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from "../constans/actionTypes";

import * as api from '../api/index';

export const getPosts = () => async (dispatch) => {
    try {
      const { data : response } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };