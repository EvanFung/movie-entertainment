//make typescript happy
//https://stackoverflow.com/questions/70409219/get-user-id-from-session-in-next-auth-client
// next-auth-extensions.d.ts
import NextAuth, { DefaultSession } from "next-auth";

//add user id to session object
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's id */
            id: string;
        } & DefaultSession["user"];
    }
}