import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "../schema";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const userId = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })
    if (!userId) {
        return NextResponse.json({
            error: 'User not found'
        }, {
            status: 404
        })
    }

    return NextResponse.json(userId)
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const bodyValidation = userSchema.safeParse(body)
    if (!bodyValidation.success || !body.name) {
        return NextResponse.json(bodyValidation.error?.errors, {
            status: 400
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if (!user) {
        return NextResponse.json({
            error: 'User not found'
        }, {
            status: 404
        })
    }

    const newUser = await prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser)
}



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if (!user) {
        return NextResponse.json({
            error: 'User not found'
        }, {
            status: 404
        })
    }

    await prisma.user.delete({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({
    }, {
        status: 200
    })
}



// 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