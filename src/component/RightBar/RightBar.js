import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../config/actions/blog';

const RightBar = () => {

 
  const {blog} = useSelector(state => state.blogReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div>
    </div>
  )
}

export default RightBar