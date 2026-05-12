import Messages from "@/components/messages";
import { unstable_noStore } from "next/cache";

// export const revalidate = 5; // revalidate every 5 seconds, reserved name for pages
// export const dynamic = 'force-static'; // force static cache, force-dynamic is default

export default async function MessagesPage() {
	unstable_noStore(); // revalidate every time
	const response = await fetch("http://localhost:8080/messages", {
		headers: {
			"X-ID": "page",
		},
	});
	const messages = await response.json();

	if (!messages || messages.length === 0) {
		return <p>No messages found</p>;
	}

	return <Messages messages={messages} />;
}
