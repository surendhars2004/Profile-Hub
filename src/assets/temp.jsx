import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

function UserDetail({ userData }) {
  const { username } = useParams();
  const user = userData.find((u) => u.login.username === username);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      {/* Background Image */}
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Background" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Avatar and User Details */}
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={user.picture.large} alt="User Avatar" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{user.name.title} {user.name.first} {user.name.last}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{user.name.title} {user.name.first} {user.name.last}</h1>
        </div>

        {/* Additional User Details Section */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
          <div className="mt-2">
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            {user.cell && <p className="text-gray-600"><strong>Cell:</strong> {user.cell}</p>}
            <p className="text-gray-600">
              <strong>Location:</strong> {user.location.city}, {user.location.state}, {user.location.country}
            </p>
            <p className="text-gray-600">
              <strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 underline mb-4 inline-block px-4 mt-4">
        <p>Back to User List</p>
      </Link>
    </div>
  );
}

export default UserDetail;
