import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import connectMongoDB from "@/lib/connectMongoDB";
import User from "@/models/user";

export async function POST (req){
    
    try{
        const {name,phone, email,password} = await req.json();
        
        const hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);

        await connectMongoDB();

        const existsUser = await User.findOne({email});
        if(existsUser){
            return NextResponse.json({error:'User Already Exists'},{status:400});
        }

        const user = await User.create({name, phone ,email,password:hashPassword})
        if(user){
            return NextResponse.json({
                message:'User Created Succesfully',
                success:true,
                user
            })
        }
    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}