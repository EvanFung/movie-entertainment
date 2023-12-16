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

const COMMENT_SELECT_FIELDS = {
    id: true,
    message: true,
    parentId: true,
    createdAt: true,
    user: {
        select: {
            id: true,
            name: true,
            image: true,
        },
    },
    likes: true
}

// api/movie/[id]/review/[reviewId]
// get review by id
export async function GET(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
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
            comments:{
                orderBy: {
                    createdAt: 'desc'
                },
                select: {
                    ...COMMENT_SELECT_FIELDS,
                    _count: { select: { likes: true } },
                },

            }
        },

    })
    if(!review)
        return NextResponse.json({error: 'Review not found'}, {status: 404})

    // Renaming the _count attribute for each comment
    const modifiedReview = {
        ...review,
        comments: review.comments.map(comment => ({
            ...comment,
            likeCount: comment._count.likes, // Rename _count to likesCount
            likedByMe: comment.likes.some(like => like.userId === session?.user.id),
        })),
    };

    return NextResponse.json(modifiedReview)
}