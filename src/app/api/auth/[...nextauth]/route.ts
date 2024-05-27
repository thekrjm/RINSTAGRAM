import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';
import { addUser } from '@/service/user';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
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
    async session({ session, token }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
          id: token.id as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions) as never;
export { handler as GET, handler as POST };
