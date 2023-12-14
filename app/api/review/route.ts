import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import {postReviewSchema} from "@/app/validationSchemas";
//POST A REVIEW
export async function POST(request: NextRequest,response: NextResponse) {
    const session = await getServerSession(authOptions);
    if(!session)
        return NextResponse.json({},{status: 401})
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

//GET ALL REVIEWS
export async function GET(request: NextRequest,response: NextResponse) {
    const reviews = await prisma.review.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return NextResponse.json(reviews);
}