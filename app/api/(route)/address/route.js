import connectMongoDB from "@/lib/connectMongoDB";
import User from "@/models/user";
import UserInfo from "@/models/userinfo";
import { getServerSession } from "next-auth";

export async function put (req){
    await connectMongoDB();
    const {address} = await req.json();
    try{
    const session = await getServerSession();
    const email = session?.user?.email;
    if(!email){
        console.log('Email not found');
    }
    const user = await User.findOne({email});
    const addAddress = await UserInfo.findOneAndUpdate({email:user.email},address)
    }catch(error){
        console.log('Error: ',error);
    }
    
}