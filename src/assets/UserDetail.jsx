import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { Navigate } from 'react-router-dom';

function UserDetail({ userData }) {
  const { username } = useParams();
  const user = userData.find((u) => u.login.username === username);

  if (!user) {
    return <p>User not found</p>;
  }
  let navigate = useNavigate();
  function goback(){
    navigate('/')
  }


  return (
    <div className='shadow rounded-lg mt-7'>
      {/* Background Image */}
      <div className='relative'>
        <div onClick={goback} className='absolute p-3 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
        </div>
        <img className="h-32 w-full object-cover z-[-500px] lg:h-48 rounded-t-xl" src="https://marketplace.canva.com/EAE1oe3H6Sc/1/0/1600w/canva-black-elegant-minimalist-profile-linkedin-banner-nc0eALdRvKU.jpg" alt="Background" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Avatar and User Details */}
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24  z-20 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={user.picture.large} alt="User Avatar" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            {/* <div className="mt-6 hidden min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{user.name.title} {user.name.first} {user.name.last}</h1>
            </div> */}
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a href={`mailto:${user.email}`}>Message </a>

              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a href={`tel:${user.phone}`}>Call</a>

              </button>
            </div>
          </div>
        </div>
        

        {/* Additional User Details Section */}
        <div className="mt-3 bg-white rounded-lg text-left pb-4">
  <h1 className="truncate text-2xl font-bold text-gray-900">
    {user.name.title} {user.name.first} {user.name.last}
  </h1>
  <p className="text-gray-600 mt-2">
      CEO & Founder of BetterMe, Health Coach, Harvard Guest Speaker, Forbes 30 Under 30, on a mission to create an inclusive, healthier world by inspiring change in people of all ages, shapes and backgrounds.
    </p>
    <p className="text-gray-600 w-fit px-3 rounded-lg mt-2 flex gap-1 items-center bg-[rgb(252,227,187)]">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(161,110,35)" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>
      <p className='text-[rgb(161,110,35)]'><strong>Top Life Coaching Voice</strong></p>
  
    </p>
    <p className="text-gray-400 text-sm mt-1">
       {user.location.city}, {user.location.state}, {user.location.country}. <span className='text-[rgb(24,108,197)] font-bold'>Conact info</span>
    </p>
  

</div>

      </div>
    </div>
  );
}

export default UserDetail;
