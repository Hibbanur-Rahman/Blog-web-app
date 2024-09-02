import User from "@/model/userModel";
import connect from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import httpStatusCode from "@/constants/httpStatusCode";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Email and password are required",
            }, { status: httpStatusCode.BAD_REQUEST })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Email is not found",
            }, { status: httpStatusCode.BAD_REQUEST })
        }

        const isCorrectPassword = await bcryptjs.compare(password, user.password);
        if (!isCorrectPassword) {
            return NextResponse.json({
                success: false,
                message: "Password is incorrect",
            }, { status: httpStatusCode.BAD_REQUEST });
        }

        const JWT_SECRET = process.env.JWT_SECRET as string;
        const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: '2d' });
        return NextResponse.json({
            success: true,
            message: "Login successful",
            data: {user,token}
        }, { status: httpStatusCode.OK });


    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        }, { status: httpStatusCode.INTERNAL_SERVER_ERROR })
    }

};

export { POST };
