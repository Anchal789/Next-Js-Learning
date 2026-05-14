"use server";

import { createAuthSession, destroySession, verifyAuth } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
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

export async function login(prev, formData) {
	const email = formData.get("email");
	const password = formData.get("password");

	const existingUser = getUserByEmail(email);
	if (!existingUser) {
		return { errors: { email: "No account found with this email." } };
	}

	if (!verifyPassword(existingUser.password, password)) {
		return { errors: { password: "Password is incorrect." } };
	}

	await createAuthSession(existingUser.id);
	redirect("/training");
}

export async function auth(mode, prevState, formData) {
	if (mode === "signup") {
		return signup(prevState, formData);
	} else if (mode === "login") {
		return login(prevState, formData);
	}
}

export async function logout() {
	await destroySession();
	redirect("/");
}
