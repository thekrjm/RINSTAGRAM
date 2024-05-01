import { User } from '@/model/user';
import React from 'react';
import Avatar from './Avatar';

type Props = {
  user: User;
};

const SideBar = ({ user: { name, username, image } }: Props) => {
  return (
    <>
      <div className='flex items-center'>
        {image && <Avatar image={image} />}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>
        About · Help · Location · Contact
      </p>
      <p className='font-bold text-sm text-neutral-500 mt-8'>
        @Copyright RINSTAGRAM from JM
      </p>
    </>
  );
};

export default SideBar;
