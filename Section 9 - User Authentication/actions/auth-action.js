"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export const signup = async (prev, formData) => {
	const email = formData.get("email");
	const password = formData.get("password");

	let errors = {};

	if (!email) {
		errors.email = "Email is required.";
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = "Email is invalid.";
	}

	if (!password || password.trim().length === 0) {
		errors.password = "Password is required.";
	} else if (password.length < 6) {
		errors.password = "Password must be at least 6 characters.";
	}

	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	try {
		const userId = createUser(email, hashUserPassword(password));
		await createAuthSession(userId);
		redirect("/training");
	} catch (err) {
		if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
			return { errors: { email: "Email is already in use." } };
		}
		throw err;
	}
};
