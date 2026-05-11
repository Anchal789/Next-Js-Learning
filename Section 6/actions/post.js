"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (prevState, formData) => {
	const title = formData.get("title");
	const image = formData.get("image");
	const content = formData.get("content");

	let errors = {
		title: null,
		image: null,
		content: null,
	};

	if (!title || title.trim().length === 0) errors.title = "Title is required";
	if (!image || image.size === 0) errors.image = "Image is required";
	if (!content || content.trim().length === 0)
		errors.content = "Content is required";

	if (Object.values(errors).some(Boolean)) {
		return errors;
    }
    
    let imageUrl = "";

	try {
		imageUrl = await uploadImage(image);
	} catch (error) {
		throw new Error("Failed to upload image");
	}

	await storePost({ imageUrl: imageUrl, title, content, userId: 1 });

    revalidatePath("/feed");
	redirect("/feed");
};

export const togglePostLikeStatus = async (postId) => {
    await updatePostLikeStatus(postId, 2);
    revalidatePath("/feed");
};