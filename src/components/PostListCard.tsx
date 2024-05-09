'use client';
import { SimplePost } from '@/model/post';
import React, { useState } from 'react';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPotal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

const PostListCard = ({ post, priority = false }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const { username, userImage, image, likes, text, createdAt } = post;

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
      <ActionBar post={post} />
      <CommentForm />
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
