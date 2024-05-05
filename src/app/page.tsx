import FollowingBar from '@/components/ui/FollowingBar';
import PostList from '@/components/ui/PostList';
import SideBar from '@/components/ui/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/auth/signin');
  return (
    <section className='flex flex-col md:flex-row w-full max-w-[850px] p-4'>
      <div className='w-full basis-3/4 min-w-0'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4 ml-4'>
        <SideBar user={user} />
      </div>
    </section>
  );
}
