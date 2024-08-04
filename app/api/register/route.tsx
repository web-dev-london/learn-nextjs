import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { z } from "zod"

const shema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
}).strict()

export async function POST(request: NextRequest) {
    const body = await request.json()

    const bodyValidation = shema.safeParse(body)

    if (!bodyValidation.success) {
        return NextResponse.json(bodyValidation.error?.errors, {
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

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword
            // hashedPassword: await bcrypt.hash(body.password, 10)
        }
    })

    return NextResponse.json(newUser)
}