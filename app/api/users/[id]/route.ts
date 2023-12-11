import {NextRequest, NextResponse} from "next/server";
import {patchUserSchemas} from "@/app/validationSchemas";
import authOptions from "@/app/auth/authOptions";
import {getServerSession} from "next-auth";
import prisma from "@/prisma/client";
interface Props {
    params: {
        params: {
            id: string
        }
    }
}

export async function PATCH(
    request: NextRequest,
    {params}: {
        params: {
            id: string
        }
    },
) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});
    const body = await request.json();
    const {name, location, bio, pronouns} = body;
    const validation = patchUserSchemas.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400});
    }
    const user = await prisma.user.findUnique({where : {id: params.id}});
    if (!user)
        return NextResponse.json({error: 'Invalid user'}, {status: 404});
    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name,
            location,
            bio,
            pronouns,
        }
    });
    return NextResponse.json(updatedUser);

}