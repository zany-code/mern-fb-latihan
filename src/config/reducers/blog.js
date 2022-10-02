import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from "../constans/actionTypes";

const blogReducer =  (blog = [], action) =>  {
    switch (action.type) {
        case FETCH_ALL : 
            return action.payload;
        case LIKE : 
            return blog.map((item) => (blog._id === action.payload._id ? action.payload : item));
        case CREATE :
            return [...blog, action.payload];
        case UPDATE :
            return blog.map((item) => (item._id === action.payload._id ? action.payload : item));
        case DELETE :
            return blog.filter((item) => item._id !== action.payload);
        default: return blog;
    }
};

export default blogReducer