'use client';
import { Comment, SimplePost } from '@/model/post';
import React, { useState } from 'react';
import Image from 'next/image';
import ActionBar from './ActionBar';
import ModalPotal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';
import usePosts from '@/hooks/posts';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

const PostListCard = ({ post, priority = false }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const { username, userImage, image, comments, text } = post;
  
  const { postComment } = usePosts();
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };
  return (
    <article className='rounded-lg shadow-sm border border-gray-200'>
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar post={post} onComment={handlePostComment}>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>
        {comments > 1 && (
          <button
            className='font-bold my-2 text-sky-500'
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      {openModal && (
        <ModalPotal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPotal>
      )}
    </article>
  );
};

export default PostListCard;
