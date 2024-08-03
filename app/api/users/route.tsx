import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const body = await request.json();
    const validation = userSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error?.errors, {
            status: 400
        })
    }


    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) {
        return NextResponse.json({
            error: 'User already exists'
        }, {
            status: 400
        })
    }

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const bodyValidation = userSchema.safeParse(body)
    if (!bodyValidation.success || !body.name) {
        return NextResponse.json(bodyValidation.error?.errors, {
            status: 400
        })
    }
    return NextResponse.json({
        id: 1, name: body.name
    }, {
        status: 201
    })
}

