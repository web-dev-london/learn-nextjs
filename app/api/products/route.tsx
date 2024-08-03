import { NextRequest, NextResponse } from "next/server";
import productSchema from "./productSchema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const products = await prisma.user.findMany()

    return NextResponse.json(products)

}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const bodyValidation = productSchema.safeParse(body)
    if (!bodyValidation.success) {
        return NextResponse.json(bodyValidation.error?.errors, {
            status: 400
        })
    }

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
        }
    })

    return NextResponse.json(newProduct)
}