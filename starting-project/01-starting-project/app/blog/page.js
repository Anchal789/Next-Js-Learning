import Link from "next/link";

const BlogPage = () => {
	return (
		<main>
			<h1>Blog</h1>
			<p>
				<Link href={"/blog/first-post"}>First Post</Link>
			</p>
			<p>
				<Link href={"/blog/second-post"}>Second Post</Link>
			</p>
		</main>
	);
};

export default BlogPage;
