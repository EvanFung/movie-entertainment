import {NextRequest, NextResponse} from "next/server";
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
    })
}

export async function DELETE(request:NextRequest, {params}: Props) {

    try {
        const deletedComment=await prisma.comment.delete({
                where: {
                    id: params.commentId,
                }
            });
        if(!deletedComment) {
            return NextResponse.json({error: 'Comment not found'}, {status: 404})
        }
    } catch(error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
    return NextResponse.json({}, {status: 200})
}