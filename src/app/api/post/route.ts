import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		console.log(reqBody);

		// Manually set the createdAt field
		reqBody.createdAt = new Date().toLocaleString();

		console.log("Data before saving:", reqBody); // Log data before saving

		const newPost = new Post(reqBody);

		const savedPost = await newPost.save();

		console.log(savedPost);

		return NextResponse.json({
			message: "Message sent successfully",
			success: true,
			savedPost,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function GET() {
	try {
		const posts = await Post.find({});
		return NextResponse.json(posts);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
