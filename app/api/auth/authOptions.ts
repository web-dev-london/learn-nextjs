import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "password" },
                email: { label: "Email", type: "email", placeholder: "email" },
            },
            authorize: async (credentials, req) => {
                if (!credentials?.password || !credentials?.email) return null;
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                });
                if (!user) return null;
                const isValid = await bcrypt.compare(credentials.password, user.hashedPassword!);
                if (!isValid) return null;
                return user
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    session: {
        strategy: "jwt",
    },

} satisfies NextAuthOptions;