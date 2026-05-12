"use client";

const NewsErrorPage = ({ error }) => {
	return (
		<div id='error'>
			<p>An error occurred</p>
			<code>{error.message}</code>
		</div>
	);
};

export default NewsErrorPage;
