import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { NavLink } from 'react-router';

const SingleApp = ({appData}) => {
    const {id, image, title, downloads, ratingAvg} = appData;

            return (
               <NavLink to={`/appdetails/${id}`} className="group block rounded-2xl bg-base-100 p-4 space-y-4 shadow-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
          <figure>
            <img
              src={image}
              alt={title} className='w-80 h-80 rounded-lg mx-auto' />
          </figure>
          
            <h2 className="font-medium text-xl transition group-hover:text-[#632ee3]">{title}</h2>
            <div className='flex justify-between'>
            <p className='flex items-center gap-2 text-[#00D390] bg-gray-100 px-2 py-1 rounded-sm'><IoMdDownload />{downloads}</p>
            <p className='flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-sm'><FaRegStar />{ratingAvg}</p>
        
            </div>
          </NavLink>
        
            );
};

export default SingleApp;
