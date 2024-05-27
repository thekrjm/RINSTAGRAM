'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import FadeSpinner from './ui/FadeSpinner';
import usePosts from '@/hooks/posts';

const PostList = () => {
  const { posts, isLoading } = usePosts();
  
  return (
    <section>
      {isLoading && (
        <div className='flex justify-center items-center mt-32'>
          <FadeSpinner color='skyblue' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
