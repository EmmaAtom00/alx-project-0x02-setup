import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className='border border-gray-300 rounded-lg p-4 shadow-md mb-4 bg-white'>
      <h2 className='text-lg font-semibold'>{name}</h2>
      <p className='text-gray-700'>{email}</p>
      <p className='text-gray-700'>Address: {address.street}, {address.city}</p>
      <small className='text-gray-500'>Zip code: {address.zipcode}</small>
    </div>
  )
}

export default UserCard