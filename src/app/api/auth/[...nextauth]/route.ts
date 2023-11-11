import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { User } from "../../../../interfaces/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

        Credentials({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Password",
                },
            },

            async authorize(credentials) {
                try {
                    const user = {
                        id: "1",
                        name: "Miguel",
                        password: "password",
                    };

                    if (
                        credentials?.username === user.name &&
                        credentials?.password === user.password
                    ) {
                        return user as User | any;
                    }
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        error: "/auth/login",
    },
});

export { handler as GET, handler as POST };
