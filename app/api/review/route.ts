import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import {postReviewSchema} from "@/app/validationSchemas";
export async function POST(request: NextRequest,response: NextResponse) {
    const session = await getServerSession(authOptions);
    console.log('Post review session',session);
    if(!session)
        return NextResponse.json({},{status: 401})
    const reqBody = await request.json();
    const {title,body, rating, movieId} = reqBody;
    const validation = postReviewSchema.safeParse(reqBody);
    if(!validation.success) {
        return NextResponse.json(validation.error.format(),{status: 400})
    }

    const newReview = await prisma.review.create({
        data: {
            title,
            body,
            rating,
            userId: session.user.id,
            movieId,
        }
    });
    return NextResponse.json(newReview,{status: 201})
}