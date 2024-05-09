import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';
import { addUser } from '@/service/user';
import { AuthOptions, NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ user: { id, email, image, name } }) {
      if (!email) return false;
      addUser({
        id,
        email,
        image,
        name: name || '',
        username: email.split('@')[0] || '',
      });

      return true;
    },
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions) as never;
export { handler as GET, handler as POST };
