import React from 'react';
import { profile } from "../../asset";
import {
  BsFacebook,
  BsFillPeopleFill,
  BsFillCalendar2WeekFill,
  BsStarFill,
  BsFillFlagFill,
  BsMessenger,
  BsFillBarChartLineFill,
  BsHeartFill,
  BsPencilFill,
} from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import {
  MdStorefront,
  MdOutlineVideogameAsset,
  MdOutlineOndemandVideo,
  MdHealthAndSafety,
  MdOutlineAvTimer,
  MdSurfing,
  MdSave,
  MdOutlineLiveTv,
} from "react-icons/md";
import { RiMentalHealthFill, RiLeafFill } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";

const AsideLeftBar = () => {
  return (
    <ul className="space-y-2 h-96 w-full overflow-y-scroll">
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <img
              src={profile}
              alt="profile"
              className=" w-[35px] rounded-full ml-0 left-0"
            />
            <span className="ml-3 font-bold">Profile</span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsFillPeopleFill className="flex-shrink-0 w-6 text-3xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Cari Teman
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsFacebook className="flex-shrink-0 w-6 text-3xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 font-bold"> Selamat Datang</span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <IoIosPeople className="flex-shrink-0 w-6 text-3xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 font-bold">Cari Group</span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdStorefront className="flex-shrink-0 w-6 text-3xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Products
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdOutlineOndemandVideo className="flex-shrink-0 w-6 text-3xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Watch
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsFillCalendar2WeekFill className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Buat Acara
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <FcAdvertising className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Aktifitas Iklan Terkini
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdHealthAndSafety className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              COVID-19 : Pusat Informasi
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsStarFill className="flex-shrink-0 w-6 text-orange-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Favorit
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsFillFlagFill className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Halaman
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdOutlineAvTimer className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Kenangan
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdHealthAndSafety className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              COVID-19 : Pusat Informasi
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <RiMentalHealthFill className="flex-shrink-0 w-6 text-purple-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Kesehatan Mental
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdOutlineVideogameAsset className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Game
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsMessenger className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Messanger
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsFillBarChartLineFill className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Penjualan
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsHeartFill className="flex-shrink-0 w-6 text-red-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Penggalangann Dana
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <RiLeafFill className="flex-shrink-0 w-6 text-green-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Pusat Info Perubahan Iklim
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdSave className="flex-shrink-0 w-6 text-black-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Tersimpan
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdSurfing className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Tempat Berlibur
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <BsPencilFill className="flex-shrink-0 w-6 text-orange-300 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Sarankan Pengeditan
            </span>
          </li>
          <li className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
            <MdOutlineLiveTv className="flex-shrink-0 w-6 text-blue-600 text-xl transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap font-bold">
              Siaran Langsung
            </span>
          </li>
        </ul>
  )
}

export default AsideLeftBar