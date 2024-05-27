'use client';
import { AuthUser } from '@/model/user';
import PostUserAvatar from './PostUserAvatar';
import FilesIcon from './ui/FilesIcon';
import Button from './ui/Button';
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FadeSpinner from './ui/FadeSpinner';

type Props = {
  user: AuthUser;
};

const NewPost = ({ user: { username, image } }: Props) => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', textRef.current?.value ?? '');

    fetch('/api/posts/', { method: 'POST', body: formData }) //
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push('/');
      })
      .catch((error) => setError(error.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <section className='w-full max-w-xl flex flex-col items-center mt-6'>
      {loading && (
        <div className='absolute inset-0 flex pt-[20%] justify-center  z-20 bg-sky-500/10'>
          <FadeSpinner color='black' />
        </div>
      )}
      {error && (
        <p className='w-full bg-red-100 text-red-600 text-center p-4 mb-4 font-bold'>
          {error}
        </p>
      )}
      <PostUserAvatar username={username} image={image ?? ''} />
      <form className='w-full flex flex-col mt-2' onSubmit={handleSubmit}>
        <input
          className='hidden'
          type='file'
          name='input'
          id='input-upload'
          accept='image/*'
          onChange={handleChange}
        />
        <label
          className={`w-full h-96 flex flex-col items-center justify-center ${
            !file && 'border-2 border-sky-500 border-dashed'
          }`}
          htmlFor='input-upload'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {dragging && (
            <div className='absolute inset-0 z-10 bg-sky-500/20 pointer-events-none'></div>
          )}
          {!file && (
            <div className='flex flex-col items-center justify-center'>
              <FilesIcon />
              <p>Drag and Drop your image here or click</p>
            </div>
          )}
          {file && (
            <div className='relative w-full aspect-square'>
              <Image
                className='object-cover'
                src={URL.createObjectURL(file)}
                alt='image file'
                fill
                sizes='250px'
              />
            </div>
          )}
        </label>
        <textarea
          className='outline-none text-lg border border-neutral-300'
          name='text'
          id='input-text'
          required
          rows={10}
          placeholder='Write a caption...'
          ref={textRef}
        />
        <Button text='Publish' onClick={() => {}} />
      </form>
    </section>
  );
};

export default NewPost;
