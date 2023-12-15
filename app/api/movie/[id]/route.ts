import {NextRequest, NextResponse} from "next/server";
import api from "@/app/utils/api"
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, {params}: {
    params: {
        id: string
    }
}) {
    try {
        // Get movie detail
        const movie = await api.get(`/movie/${params.id}?language=en-US`).then(res => res.data);

        // Get movie's crew
        const crews = await api.get(`/movie/${params.id}/credits?language=en-US`).then(res => res.data);
        const reviews = await prisma.review.findMany({
            where:{
                movieId: params.id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        email:true,
                    }
                },
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json({ movie, crews, reviews });
    } catch (error:any) {
        // Check if the error is a 404 (Not Found)
        if (error.response && error.response.status === 404) {
            return NextResponse.json({error: 'Movie not found'}, {status: 404});
        } else {
            // Handle other types of errors (e.g., network issues, server errors)
            return NextResponse.json({ error: "An error occurred" }, {status: 500});
        }
    }
}