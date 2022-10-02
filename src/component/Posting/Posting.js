import React, {useState} from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import {profile, poto} from '../../asset';
import {BsFillPeopleFill, BsFillEmojiLaughingFill} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai';


const Posting = () => {

  return (
    <div className=" h-screen w-screen flex items-center fixed justify-center">
      <div className="w-[500px] shadow-2xl p-7">
        <div className=" flex justify-between border-b-4 pb-3 border-gray-400">
          <p className=" invisible">p</p>
          <h1 className=" text-2xl font-bold">Buat Postingan</h1>
          <BsFillXCircleFill className=" text-2xl font-bold cursor-pointer hover:scale-150"/>
        </div>

        <div className=" flex mt-5 gap-3">
          <img src={profile} alt="profile" className=" w-[50px] h-[50px] rounded-full"/>
          <div>
            <p className=" font-bold">Users</p>
            <div className=" flex items-center bg-slate-300 p-1 rounded-lg font-bold text-sm cursor-pointer">
              <BsFillPeopleFill/>
              <p>Teman</p>
              <AiFillCaretDown/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <textarea name="post" id="post" className=" w-full h-32 border-none outline-none" placeholder="Buat Postingan Anda Sekarang juga......"></textarea>
        </div>
        
        <div className="w-[200px] h-auto block mx-auto">
          <img src={poto} alt='alala' className='mt-0'/>
        </div>

        <div className="flex justify-between">
          <input type="color" name="jaj" id="jaj" className=" rounded-full" />
          <BsFillEmojiLaughingFill className=" text-orange-500 text-2xl"/>
        </div>

        <div>
          <p>Tambahkan Postingan Anda</p>
          <input type="file" name="" id="" />
        </div>
        <button className=" w-full text-center bg-green-500 mt-5 text-white font-bold p-1 rounded-md hover:scale-105">Kirim</button>
      </div>
    </div>
  );
};

export default Posting;
