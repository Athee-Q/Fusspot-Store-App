import connectMongoDB from "@/lib/connectMongoDB";
import User from "@/models/user";
import nextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log('Error: ',error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token,user}){
      if(user){
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({session,token}){
      if(session.user){
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
    async signIn({ user, account }) {
      // console.log('user :' , user);
      // console.log('account :' , account);
      if (account.provider === "google") {
        try {
          const { name, email } = user;
          await connectMongoDB();
          const ifUserExists = await User.findOne({ email });
          if (ifUserExists) {
            return user;
          }
          const newUser = await User.create({ name, email });
          if (newUser.status === 200 || newUser.status === 201) {
            return user;
          }
        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:'/signin',
  }
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
