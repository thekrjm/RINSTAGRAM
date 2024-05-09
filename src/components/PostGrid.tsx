import React from 'react';
import useSWR from 'swr';
import FadeSpinner from './ui/FadeSpinner';
import { SimplePost } from '@/model/post';
import PostGridCard from './PostGridCard';

type Props = {
  username: string;
  query: string;
};

const PostGrid = ({ username, query }: Props) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
  return (
    <div className='w-full text-center'>
      {isLoading && <FadeSpinner />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostGrid;
