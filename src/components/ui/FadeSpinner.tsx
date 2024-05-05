import dynamic from 'next/dynamic';
import React from 'react';

const FadeLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.FadeLoader),
  {
    ssr: false,
  },
);

const FadeSpinner = ({ color = 'skyblue' }: { color: string }) => {
  return <FadeLoader color={color} />;
};

export default FadeSpinner;
