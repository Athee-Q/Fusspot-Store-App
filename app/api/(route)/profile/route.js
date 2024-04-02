// api/profile.js
import connectMongoDB from "@/lib/connectMongoDB"; // Update the path as per your project structure
import User from "@/models/user"; // Update the path as per your project structure
import UserInfo from "@/models/userinfo"; // Update the path as per your project structure
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const { _id, name, image, ...otherInfo } = data;

    let filter = {};
    if (_id) {
      filter = { _id };
    } else {
      const session = await getServerSession(authOptions);
      const email = session?.user?.email;
      filter = { email };
    }
    const user = await User.findOne(filter);
    await User.updateOne(filter, { name, image });
    await UserInfo.findOneAndUpdate({ email: user.email }, otherInfo, {
      upsert: true,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}

export async function GET(req) {
  await connectMongoDB();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  console.log(_id);

  let userFilter = {};

  if (_id) {
    userFilter = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    if (!email) {
      return NextResponse.json({});
    }
    userFilter = { email };
  }
  const user = await User.findOne(userFilter).lean();
  const info = await UserInfo.findOne({ email: user.email }).lean();
  return NextResponse.json({ ...user, ...info });
}
