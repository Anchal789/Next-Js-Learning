"use client"

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
	const newsItemSlug = params.slug;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

	const router = useRouter();

	if (!newsItem) {
		return notFound();
    }
    
	return (
		<>
			<div className='modal-backdrop' onClick={router.back}/>
			<dialog className='modal' open>
				<div className='fullscreen-image'>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={"100%"} height={"auto"} />
				</div>
			</dialog>
		</>
	);
};

export default InterceptedImagePage;
