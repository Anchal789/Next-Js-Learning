import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedImagePage = ({ params }) => {
	const newsItemSlug = params.slug;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

	if (!newsItem) {
		return notFound();
	}
	return (
		<>
			<h2>Intercepted</h2>
			<div className='fullscreen-image'>
				<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
			</div>
		</>
	);
};

export default InterceptedImagePage;
