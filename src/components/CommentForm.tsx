'use client';
import { FormEvent, useState } from 'react';
import SmileIcon from './ui/icons/SmileIcon';
import { Comment } from '@/model/post';

type Props = {
  onPostComment: (comment: string) => void;
};

const CommentForm = ({ onPostComment }: Props) => {
  const [comment, setComment] = useState('');
  const buttonDisabled = comment.length === 0;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onPostComment(comment);
    setComment('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center px-3 border-t border-neutral-300 '
    >
      <SmileIcon />
      <input
        className='w-full ml-2 border-none outline-none p-3'
        type='text'
        placeholder='Add a comment'
        required
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button
        disabled={buttonDisabled}
        className={`font-bold ml-2 ${
          buttonDisabled ? 'text-sky-200' : 'text-sky-500'
        }`}
      >
        Post
      </button>
    </form>
  );
};

export default CommentForm;
