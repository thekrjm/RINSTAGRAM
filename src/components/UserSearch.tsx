'use client';

import { ProfileUser } from '@/model/user';
import { FormEvent, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import UserCard from './UserCard';
import useDebounce from '@/hooks/useDebounce';

const UserSearch = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedSearch = useDebounce(keyword, 1000);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${debouncedSearch}`);
  console.log('data.....', users);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    return;
  };

  return (
    <section className='w-full max-w-2xl my-4 flex flex-col items-center'>
      <form
        className='w-full flex flex-col mb-4 justify-center items-center'
        onSubmit={onSubmit}
      >
        <input
          className='w-full text-xl p-3 outline-none border border-gray-400 '
          type='text'
          placeholder='Search from a username or name'
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        {error && <p>오류가 발생했습니다.</p>}
        {isLoading && <FadeLoader />}
        {!isLoading && !error && users?.length === 0 && (
          <p>찾는 사용자가 없습니다.</p>
        )}
        <ul className='w-full p-4'>
          {users?.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
};

export default UserSearch;
