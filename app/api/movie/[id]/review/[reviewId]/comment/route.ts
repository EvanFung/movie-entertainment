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