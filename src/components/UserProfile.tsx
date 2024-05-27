import { ProfileUser } from '@/model/user';
import React from 'react';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};

const UserProfile = ({ user }: Props) => {
  const { image, username, name, followers, following, posts } = user;

  const info = [
    { title: 'posts', data: posts },
    { title: 'followers', data: followers },
    { title: 'following', data: following },
  ];

  console.log('posts', posts, 'followers', followers, 'following', following);

  return (
    <section className='flex flex-col w-full md:flex-row items-center justify-center py-12 border-b border-neutral-300'>
      <Avatar image={image} highlight size='xlarge' />
      <div className='md:ml-10 basis-1/3'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-2xl md:mr-8 my-4 md:mb-0'>{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className='flex my-4 gap-4'>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className='font-bold mr-1'>{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className='text-xl font-bold text-center md:text-start'>{name}</p>
      </div>
    </section>
  );
};

export default UserProfile;
