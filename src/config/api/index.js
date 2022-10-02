import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5000'});

export const fetchPosts = () => API.get('/blog/getpost');
export const fetchPostsById = (id) => API.get(`/blog/getpost/${id}`);
export const createPost = (newPost) => API.post('/blog/posting', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posting/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posting/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posting/${id}`);