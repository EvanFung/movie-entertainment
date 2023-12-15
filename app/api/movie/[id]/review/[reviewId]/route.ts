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

// api/movie/[id]/review/[reviewId]
// get review by id
export async function GET(request: NextRequest, {params}: Props) {
    // const session = await getServerSession(authOptions);
    // if(!session)
    //     return NextResponse.json({},{status: 401})
    const {id, reviewId} = params;
    const review = await prisma.review.findUnique({
        where: {
            id:reviewId,
        },
        include: {
            user: {
                select: {
                    id:true,
                    name:true,
                    image: true,
                }
            },
            comments:true
        }
    })
    if(!review)
        return NextResponse.json({error: 'Review not found'}, {status: 404})
    return NextResponse.json(review)
}