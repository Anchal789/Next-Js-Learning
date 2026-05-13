"use client";

import { signup } from "@/actions/auth-action";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function AuthForm() {
  const [state, formAction] = useFormState(signup, {});

	return (
		<form id='auth-form' action={formAction}>
			<div>
				<img src='/images/auth-icon.jpg' alt='A lock icon' />
			</div>
			<p>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' autoComplete='username' />
				{state?.errors?.email && (
					<span style={{ color: "red", fontSize: "0.8rem", marginTop: "20px" }}>
						{state?.errors.email}
					</span>
				)}
			</p>
			<p>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					autoComplete='current-password'
				/>
				{state?.errors?.password && (
					<span style={{ color: "red", fontSize: "0.8rem", marginTop: "20px" }}>
						{state?.errors.password}
					</span>
				)}
			</p>
			<p>
				<button type='submit'>Create Account</button>
			</p>
			<p>
				<Link href='/'>Login with existing account.</Link>
			</p>
		</form>
	);
}
