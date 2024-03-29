import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import {postReviewSchema} from "@/app/validationSchemas";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest,response: NextResponse) {
    const session = await getServerSession(authOptions);

    if(!session)
        return NextResponse.json({error:"Please login"},{status: 401})
    const reqBody = await request.json();
    const {title,body, rating, movieId} = reqBody;
    const validation = postReviewSchema.safeParse(reqBody);
    if(!validation.success) {
        return NextResponse.json(validation.error.format(),{status: 400})
    }
    let newReview;
    try {
        newReview = await prisma.review.create({
            data: {
                title,
                body,
                rating: rating | 1,
                userId: session.user.id,
                movieId,
            }
        });
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 404});
    }

    return NextResponse.json(newReview,{status: 201})
}