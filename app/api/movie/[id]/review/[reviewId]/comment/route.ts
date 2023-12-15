import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string;//movieId
        reviewId: string;
    }
}

// api/movie/[id]/review/[reviewId]/comment
export async function POST(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if(!session)
        return NextResponse.json({},{status: 401})
    const {id, reviewId} = params;
    const reqBody = await request.json();
    const { message} = reqBody;
    const comment = await prisma.comment.create({
        data: {
            reviewId,
            userId: session.user.id,
            message,
        }
    })
    return NextResponse.json(comment)
}