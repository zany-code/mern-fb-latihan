import React from 'react';
import {LeftBar, CenterBar, RightBar} from '../../component'

const Home = () => {
  return (
    <div className=' flex justify-between w-[100%] mt-8'>
        <div className=' w-[30%]'>
            <LeftBar/>
        </div>
        <div className=' w-[40%] text-center'>
            <CenterBar/>
        </div>
        <div className=' w-[30%] text-center'>
            <RightBar/>
        </div>
    </div>
  )
}

export default Home