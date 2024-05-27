import FadeSpinner from './ui/FadeSpinner';
import PostGridCard from './PostGridCard';
import usePosts from '@/hooks/posts';

const PostGrid = () => {
  const { posts, isLoading } = usePosts();
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
