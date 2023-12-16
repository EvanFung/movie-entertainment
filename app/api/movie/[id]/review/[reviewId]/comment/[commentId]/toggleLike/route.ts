import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import {useParams} from "next/navigation";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string;//movieId
        reviewId: string;
        commentId: string;
    }
}
export async function GET(request:NextRequest, {params}: Props) {
    return NextResponse.json({
        id: params.id,
        reviewId: params.reviewId,
        commentId: params.commentId,
        toggleLike:true,
    })
}

export async function POST(request:NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if(!session)
        return NextResponse.json({error: 'Unauthorized action'},{status: 401})
    const data = {
        commentId: params.commentId,
        userId: session?.user.id,
    }
    const like = await prisma.commentLike.findUnique({
        where: { userId_commentId: data },
    });
    try {

    if (like == null) {
      const liked =   await prisma.commentLike.create({ data });
      return NextResponse.json({addLike:true}, { status: 201 });

    } else {
        await prisma.commentLike.delete({ where: { userId_commentId: data } });
        return NextResponse.json({addLike:false}, { status: 201 });
    }
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 404});
    }
}