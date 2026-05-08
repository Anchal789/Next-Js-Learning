import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    return {
        title: `News Details Page: ${params.slug}`,
        description: "This is the news details page"
    }
}

const NewsDetailsPage = ({ params }) => {
    const newsId = params.slug;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);

    if (!newsItem) {
        return notFound();
    }
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}><img src={`/images/news/${newsItem.image}`} alt={newsItem.title} /></Link>
                <h1>{newsItem.title}</h1>
                <time datetime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
};

export default NewsDetailsPage