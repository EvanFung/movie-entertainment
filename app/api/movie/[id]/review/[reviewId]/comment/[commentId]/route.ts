import {NextRequest, NextResponse} from "next/server";

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