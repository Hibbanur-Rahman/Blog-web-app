import User from "@/model/userModel";
import bcryptjs from 'bcryptjs';
import connect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import httpStatusCode from "@/constants/httpStatusCode";

connect();


const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json();
        const { username, email, password, } = reqBody;
        const hashedPassword = bcryptjs.hashSync(password, 10);

        const isExistingUser = await User.findOne({ email });
        if (isExistingUser) {
            return NextResponse.json({
                success: false,
                message: "User already register with this email id",
            }, { status: httpStatusCode.BAD_REQUEST });
        }
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Failed to create user",
            }, { status: httpStatusCode.BAD_REQUEST });
        }

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            data: user
        }, { status: httpStatusCode.CREATED })

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong!!",
            error: error.message
        }, { status: httpStatusCode.INTERNAL_SERVER_ERROR })
    }
}

export { POST }