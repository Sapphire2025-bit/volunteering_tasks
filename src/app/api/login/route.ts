import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/userSchema";
import { generateToken } from "../../lib/tokenUtil";
import bcrypt from 'bcryptjs';

//check the user with DB - logIn
export async function POST(req: NextRequest) {
    //connect to mongoDB (the database)
    await connect();
    console.log('after connection the DB');
    
    const requ = await req
    console.log("request: ",requ);
    
    const { username, password } = await req.json();
    console.log("request json: ", username, password);
    try {
        // Check if user exists
        const user = await User.findOne({ username });
        console.log(user);
        
        if (!user) {
            return NextResponse.json({ error: 'Username does not exist' }, { status: 401 });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Wrong password' }, { status: 401 });
        }

        // Generate a JWT token with user role
        const token = await generateToken(user.username, user.role);
        // Set the token in a cookie
        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('token', token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',//sameSite: 'strict',
            maxAge: 60 * 60, // 1 hour
        });
        
        return response;

    } catch (error) {
        console.error('Login error', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
};
