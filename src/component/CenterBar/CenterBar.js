import React from 'react';
import {HomeNavbar} from '../Molekul';
import { Routes, Route } from 'react-router-dom';
import {CeritaHome, ForumHome, ReelsHome} from '../Molekul';

const CenterBar = () => {
  return ( 
    <div className='flex flex-col w-ful px-5'>
    <HomeNavbar/>
    <Routes>
      <Route path='/' element={<CeritaHome/>}/>
      <Route path='/reels' element={<ReelsHome/>}/>
      <Route path='/forum' element={<ForumHome/>}/>
    </Routes>
    </div>
  )
}

export default CenterBar