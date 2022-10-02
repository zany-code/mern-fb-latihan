import React, { useState, useEffect } from "react";
import { profile, poto} from "../../../asset";
import { AiFillPlusCircle, AiFillLike } from "react-icons/ai";
import {
  BsMessenger,
  BsStopwatch,
  BsCardImage,
  BsImages,
  BsThreeDots,
} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { MdLiveTv, MdComment, MdOutlineShare } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import moment from "moment";
import { getPosts } from "../../../config/actions/blog";
import axios from "axios";

const CeritaHome = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchApi = async () => {
        try {
          const {data : response} = await axios.get('http://localhost:5000/blog/getpost');
          setData(response.data)
        } catch (error) {
          console.log(error);
        }
      }
      fetchApi()
  }, [])

  
  const {blog} = useSelector((state) => state.blogReducer);

  return (
    <>
      <div className=" w-full flex shadow-xl items-center p-5">
        <div className=" w-[40%]">
          <img
            src={profile}
            alt="profile"
            className=" w-[200px] rounded-md shadow-lg mx-auto"
          />
          <AiFillPlusCircle className=" cursor-pointer text-blue-600 text-6xl text-center mx-auto hover:text-5xl mt-0" />
          <p className=" text-lg font-bold">Buat Cerita</p>
        </div>
        <div className=" w=[60%] flex flex-col gap-5 ml-5">
          <div className=" flex gap-2">
            <BsCardImage className=" text-2xl" />
            <p>Bagikan Kegiatan Sehari-hari dengan teman dan kelaurga</p>
          </div>
          <div className=" flex gap-2">
            <BsStopwatch className=" text-2xl" />
            <p>Cerita menghilang setelah 24 jam</p>
          </div>
          <div className=" flex gap-2">
            <BsMessenger className=" text-2xl" />
            <p>Balasan dan Tanggapan bersifat privat</p>
          </div>
        </div>
      </div>

      <div className=" mt-10 shadow-xl p-5">
        <div className="flex item-center">
          <img
            src={profile}
            alt="baut Postingan"
            className=" w-[70px] rounded-full"
          />
          <input
            type="text"
            placeholder="Buat Postingan"
            className="w-full border-none outline-none ml-4 hover:bg-slate-300 rounded-xl p-5"
          />
        </div>
        <div className=" mt-5 flex justify-between">
          <div className=" flex items-center gap-1">
            <MdLiveTv className=" text-3xl text-red-500" />
            <p>Siaran Langsung</p>
          </div>
          <div className=" flex items-center gap-1">
            <BsImages className=" text-3xl text-green-600" />
            <p>Foto/Video</p>
          </div>
        </div>
      </div>
      {
        data.map((item) => {
          return (
            <div className=" mt-10 p-5 shadow-xl">
            <div className="flex justify-between">
              <div className=" flex">
                <img
                  src={profile}
                  alt="Postingan"
                  className=" w-[50px] rounded-full w-full h-auto"
                />
                <div className="ml-3">
                  <h1 className=" font-bold ml-0">{item.creator}</h1>
                  <div className=" flex items-center leading-4 gap-1 text-gray-500">
                      <p>{moment(item.createdAt).fromNow()}</p>
                    <GiEarthAmerica />
                  </div>
                </div>
              </div>
              <BsThreeDots className=" text-2xl cursor-pointer font-bold" />
            </div>
            
            
            <hr className=" h-1 bg-slate-400 mt-1" />
            <div className="mt-3 text-left">
              <p>
              {item.body}
              </p>
              <img src={`http://localhost:5000/${item.image}`} alt="posting" className=" rounded-md mt-3" />
            </div>
            <div className=" flex justify-between mt-2">
              <div className=" flex">
                <AiFillLike className=" text-xl text-blue-700" />
                <p></p>
              </div>
              <div className=" flex gap-2 cursor-pointer">
                <p>10 Komentar, </p>
                <p>{item.tags} Kali Dibagikan</p>
              </div>
            </div>
            <hr className=" h-1 bg-slate-400 mt-1" />
            <div className=" flex justify-between mt-2">
              <div className=" flex cursor-pointer">
                <AiFillLike className=" text-2xl text-blue-700" />
                <p>{item.likes}</p>
              </div>
              <div className=" flex cursor-pointer">
                <MdComment className=" text-2xl " />
                <p>Commentar</p>
              </div>
              <div className=" flex cursor-pointer">
                <MdOutlineShare className=" text-2xl text-blue-700" />
                <p>Share</p>
              </div>
            </div>
          </div>
          )
        })
      }
    </>
  );
};

export default CeritaHome;
