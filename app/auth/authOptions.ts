import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from 'next-auth'

const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[  GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: 'jwt'
    },
    debug:true
}

export default authOptions;