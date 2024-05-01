import Image from 'next/image';
import React from 'react';

type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

const Avatar = ({ image, size = 'normal', highlight = false }: Props) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        className={`rounded-full object-cover bg-white ${getImageStyle(size)}`}
        src={image ?? undefined}
        alt='profile image'
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

const getContainerStyle = (size: string, highlight: boolean): string => {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
    : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getImageStyle = (size: string): string => {
  return size === 'small'
    ? 'w-[34px] h-[34px]  p-[0.1rem]'
    : 'w-16 h-16  p-[0.2rem]';
};

export default Avatar;
