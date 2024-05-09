import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: 'SignIn',
  description: 'Signup or Login to Rinstagram',
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');
  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center mt-24'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
};

export default SignPage;
